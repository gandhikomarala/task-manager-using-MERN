"""Unit tests for kanban_state_machine handler node 013."""
import pytest
from backend.services.kanban_state_machine.service_handler_013 import ServiceHandlerNode013, TaskPayload013

def test_node_health_invariants_013():
    node = ServiceHandlerNode013()
    assert node.verify_health_invariants() is True

def test_node_payload_init_013():
    p = TaskPayload013()
    assert p.service == "kanban_state_machine"

def test_node_workflow_execution_013():
    node = ServiceHandlerNode013()
    success, tid = node.execute_workflow_stage_01({"task_title": "Build Sprint 43 Features"})
    assert success is True
    assert tid.startswith("task-")

