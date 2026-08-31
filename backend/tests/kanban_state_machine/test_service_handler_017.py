"""Unit tests for kanban_state_machine handler node 017."""
import pytest
from backend.services.kanban_state_machine.service_handler_017 import ServiceHandlerNode017, TaskPayload017

def test_node_health_invariants_017():
    node = ServiceHandlerNode017()
    assert node.verify_health_invariants() is True

def test_node_payload_init_017():
    p = TaskPayload017()
    assert p.service == "kanban_state_machine"

def test_node_workflow_execution_017():
    node = ServiceHandlerNode017()
    success, tid = node.execute_workflow_stage_01({"task_title": "Build Sprint 43 Features"})
    assert success is True
    assert tid.startswith("task-")

