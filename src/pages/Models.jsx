import { useState } from 'react'
import ModelCard from '../components/ModelCard'
import EditModel from './EditModel'

function Models() {
  const [models, setModels] = useState(() => {
    return JSON.parse(localStorage.getItem('models')) || []
  })

  const [editingModel, setEditingModel] = useState(null)

  const handleDelete = (id) => {
    const updatedModels = models.filter(
      (model) => model.id !== id
    )

    setModels(updatedModels)

    localStorage.setItem(
      'models',
      JSON.stringify(updatedModels)
    )
  }

  const handleEdit = (model) => {
    setEditingModel(model)
  }

  const handleUpdate = (updatedModel) => {
    const updatedModels = models.map((model) =>
      model.id === updatedModel.id
        ? updatedModel
        : model
    )

    setModels(updatedModels)

    localStorage.setItem(
      'models',
      JSON.stringify(updatedModels)
    )

    setEditingModel(null)
  }

  const handleCancel = () => {
    setEditingModel(null)
  }

  if (editingModel) {
    return (
      <EditModel
        model={editingModel}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
      />
    )
  }

  return (
    <main className="models-page">

      <section className="models-header">
        <div>
          <span className="page-eyebrow">
            MODEL WORKSPACE
          </span>

          <h1>My AI Models</h1>

          <p>
            Manage and monitor your machine learning
            models in one place.
          </p>
        </div>

        <div className="models-summary">
          <strong>{models.length}</strong>
          <span>Total Models</span>
        </div>
      </section>

      {models.length === 0 ? (
        <section className="models-empty">
          <div className="models-empty-icon">
            +
          </div>

          <h2>No models yet</h2>

          <p>
            Your AI models will appear here after
            you add them.
          </p>
        </section>
      ) : (
        <section className="models-grid">

          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}

        </section>
      )}

    </main>
  )
}

export default Models