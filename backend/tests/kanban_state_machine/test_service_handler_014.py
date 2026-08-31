"""Unit tests for kanban_state_machine handler node 014."""
import pytest
from backend.services.kanban_state_machine.service_handler_014 import ServiceHandlerNode014, TaskPayload014

def test_node_health_invariants_014():
    node = ServiceHandlerNode014()
    assert node.verify_health_invariants() is True

def test_node_payload_init_014():
    p = TaskPayload014()
    assert p.service == "kanban_state_machine"

def test_node_workflow_execution_014():
    node = ServiceHandlerNode014()
    success, tid = node.execute_workflow_stage_01({"task_title": "Build Sprint 43 Features"})
    assert success is True
    assert tid.startswith("task-")

