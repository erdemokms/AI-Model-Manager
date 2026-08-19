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
    <div className="container mt-5">
      <h1 className="mb-4">My AI Models</h1>

      <div className="row">
        {models.length === 0 ? (
          <p>No models found.</p>
        ) : (
          models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Models