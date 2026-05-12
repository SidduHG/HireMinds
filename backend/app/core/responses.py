from typing import Any


def ok_response(**payload: Any) -> dict[str, Any]:
    return {"status": "ok", **payload}
