function ModelCard({ model, onDelete, onEdit }) {
  const statusClass = model.status
    ?.toLowerCase()
    .replace(' ', '-')

  return (
    <article className="model-card">

      {/* Header */}
      <div className="model-card-header">

        <div className="model-card-title">

          <div className="model-avatar">
            {model.name
              ?.charAt(0)
              .toUpperCase()}
          </div>

          <div>
            <h2>{model.name}</h2>

            <p>
              {model.framework}
            </p>
          </div>

        </div>

        <span
          className={`status-badge ${statusClass}`}
        >
          <span className="status-dot"></span>
          {model.status}
        </span>

      </div>

      {/* Dataset */}
      <div className="model-dataset">

        <span>DATASET</span>

        <strong>
          {model.dataset}
        </strong>

      </div>

      {/* Metrics */}
      <div className="model-card-metrics">

        <div className="model-card-metric">

          <span>Accuracy</span>

          <strong className="metric-primary">
            {model.accuracy}%
          </strong>

        </div>

        <div className="model-card-metric">

          <span>F1 Score</span>

          <strong>
            {model.f1Score}
          </strong>

        </div>

        <div className="model-card-metric">

          <span>Epochs</span>

          <strong>
            {model.epochs}
          </strong>

        </div>

      </div>

      {/* Description */}
      {model.description && (
        <div className="model-description">
          {model.description}
        </div>
      )}

      {/* Actions */}
      <div className="model-card-actions">

        <button
          className="model-edit-button"
          onClick={() => onEdit(model)}
        >
          Edit
        </button>

        <button
          className="model-delete-button"
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

    </article>
  )
}

export default ModelCard