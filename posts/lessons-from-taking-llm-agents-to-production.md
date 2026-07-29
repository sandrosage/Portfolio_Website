---
title: "Lessons from Taking LLM Agents to Production"
date: "2026-07-15"
excerpt: "What changes when an agent leaves the notebook: orchestration graphs over loops, observability from day one, and why most 'agent bugs' are actually tool-design bugs."
tags: ["AI Agents", "LangGraph", "LLM Orchestration", "Production"]
---

Most agent demos share the same shape: a while-loop around an LLM call, a handful of tools, and a happy path that works beautifully on the three examples in the README. Moving that prototype into a production system — one that other teams depend on — changes almost every design decision. Here are the lessons that stuck with me from building agentic systems in an industrial setting.

## Model the workflow as a graph, not a loop

The naive agent loop ("call the model, execute the tool, repeat") is fine until you need to answer questions like: *What happens if step three fails? Where do we re-enter after a human review? Which paths are even reachable?*

Explicit orchestration graphs — in my case with LangGraph — make those questions answerable. Each node has a defined responsibility, each edge is a deliberate decision, and the state that flows between them is typed and inspectable:

```python
from langgraph.graph import StateGraph

builder = StateGraph(AgentState)
builder.add_node("retrieve", retrieve_context)
builder.add_node("plan", plan_actions)
builder.add_node("execute", execute_tools)
builder.add_node("review", human_review)

builder.add_conditional_edges("plan", route_by_confidence, {
    "high": "execute",
    "low": "review",
})
```

The point is not the framework — it is that control flow lives in code you can read, test, and reason about, instead of being implicit in a prompt.

## Observability is not optional here

An agent that works 90% of the time and fails silently the other 10% is worse than no agent at all. The single highest-leverage investment we made was tracing every run end to end — every model call, every tool invocation, every intermediate state — with LangFuse.

Three things become possible once you have that:

- **Debugging concrete failures.** You can replay the exact trace of a bad run instead of guessing what the model saw.
- **Regression detection.** Prompt and model changes get evaluated against real historical traces, not vibes.
- **Cost attribution.** You know which node in the graph burns the tokens, which is where optimization should start.

If you take one thing from this post: instrument first, then iterate. Iterating blind is how teams lose weeks.

## Most "agent bugs" are tool-design bugs

When an agent misbehaves, the instinct is to tweak the system prompt. In my experience, the actual root cause is usually the tool layer:

- Tools that return raw, unfiltered payloads and drown the model in irrelevant JSON.
- Error messages written for developers ("`KeyError: 'customer_id'`") instead of for the model ("The customer ID was missing — ask the user for it").
- Overlapping tools where the model has to guess which of two similar functions is the right one.

A tool interface is a UX problem where the user is a language model. Descriptions, argument names, return formats, and error messages all deserve the same care as a public API — because that is what they are.

## Retrieval quality beats model size

For RAG-backed agents, we consistently got more out of improving retrieval than out of upgrading models. Chunking strategy, metadata filters, hybrid search in Weaviate, and honest evaluation of retrieval hit-rates moved the needle far more than swapping to the next-larger model. A frontier model reasoning over the wrong context still produces a confident wrong answer.

## Keep humans in the loop where it counts

Production agents in an enterprise context do not get to be fully autonomous on day one — and they should not be. Designing explicit review checkpoints into the graph (rather than bolting approval on afterwards) meant we could ship early with a tight human loop, then widen the agent's autonomy as trust and eval coverage grew. Autonomy is something you earn incrementally, backed by traces and evals — not something you declare.

---

None of this is glamorous. But the difference between a demo and a system is exactly this unglamorous work: explicit control flow, observability, tool ergonomics, retrieval quality, and calibrated autonomy. The models are the easy part.
