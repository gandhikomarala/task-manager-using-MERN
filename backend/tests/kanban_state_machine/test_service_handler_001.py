"""Unit tests for kanban_state_machine handler node 001."""
import pytest
from backend.services.kanban_state_machine.service_handler_001 import ServiceHandlerNode001, TaskPayload001

def test_node_health_invariants_001():
    node = ServiceHandlerNode001()
    assert node.verify_health_invariants() is True

def test_node_payload_init_001():
    p = TaskPayload001()
    assert p.service == "kanban_state_machine"

def test_node_workflow_execution_001():
    node = ServiceHandlerNode001()
    success, tid = node.execute_workflow_stage_01({"task_title": "Build Sprint 43 Features"})
    assert success is True
    assert tid.startswith("task-")

