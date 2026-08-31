---
layout: default
title: Enterprise MERN Task Manager Documentation
---

# Enterprise MERN Task Manager & Workflow Platform

Welcome to the official documentation for the **Enterprise MERN Task Manager & Distributed Workflow Platform**.

---

## 🏗️ Architecture Overview

The system is organized into modular decoupled microservices:

1. **DAG Workflow Engine**: Directed Acyclic Graph dependency scheduler with topological sort.
2. **Real-Time Event Broadcaster**: Sub-millisecond WebSocket and SSE event broadcasting.
3. **RBAC & Governance**: Role-based access control and immutable audit logging.
4. **Kanban State Machine**: Strict state transitions, WIP limits, and automated SLA escalation.
5. **Sprint Analytics Engine**: Time-series rollup workers calculating sprint burndown and cycle times.
6. **Webhooks Gateway**: Bidirectional webhook dispatcher for GitHub, Jira, and Slack.

---

## 🚀 Quickstart

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB 6.0+

### Installation
```bash
git clone https://github.com/gandhikomarala/task-manager-using-MERN.git
cd task-manager-using-MERN
pip install -r requirements.txt
python scripts/demo_run.py
```

---

## 🧪 Testing & Verification
```bash
pytest backend/tests/ -v
```
