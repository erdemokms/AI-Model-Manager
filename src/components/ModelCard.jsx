function ModelCard({ model, onDelete, onEdit }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card border-0 shadow-sm h-100">

        <div className="card-body p-4">

          {/* Model başlığı */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h4 className="card-title fw-bold mb-1">
                {model.name}
              </h4>

              <small className="text-muted">
                {model.framework}
              </small>
            </div>

            <span className="badge bg-success">
              {model.status}
            </span>
          </div>

          {/* Dataset */}
          <div className="mb-4">
            <small className="text-muted d-block">
              Dataset
            </small>

            <span className="fw-semibold">
              {model.dataset}
            </span>
          </div>

          {/* Metrics */}
          <div className="row text-center mb-4">

            <div className="col-6">
              <div className="border rounded p-3">
                <small className="text-muted d-block">
                  Accuracy
                </small>

                <h4 className="text-primary fw-bold mb-0">
                  %{model.accuracy}
                </h4>
              </div>
            </div>

            <div className="col-6">
              <div className="border rounded p-3">
                <small className="text-muted d-block">
                  F1 Score
                </small>

                <h4 className="text-success fw-bold mb-0">
                  {model.f1Score}
                </h4>
              </div>
            </div>

          </div>

          {/* Epoch */}
          <div className="mb-4">
            <small className="text-muted">
              Training Epochs
            </small>

            <div className="fw-semibold">
              {model.epochs}
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">

            <button
              className="btn btn-warning flex-grow-1"
              onClick={() => onEdit(model)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger flex-grow-1"
              onClick={() => {
                const confirmed = window.confirm(
                `Are you sure you want to delete ${model.name}?`
                )

                if (confirmed) {
                 onDelete(model.id)
                 }
                }}
            >
              Delete
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ModelCard