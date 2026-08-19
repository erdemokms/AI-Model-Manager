import { useState } from 'react'

function Dashboard() {
  const [models] = useState(() => {
    return JSON.parse(localStorage.getItem('models')) || []
  })

  const totalModels = models.length

  const completedModels = models.filter(
    (model) => model.status === 'Completed'
  ).length

  const averageAccuracy =
    totalModels === 0
      ? 0
      : (
          models.reduce(
            (total, model) =>
              total + Number(model.accuracy || 0),
            0
          ) / totalModels
        ).toFixed(2)

  const recentModels = [...models]
    .reverse()
    .slice(0, 3)

  return (
    <main className="dashboard-page">

      {/* Hero */}
      <section className="dashboard-hero">
        <div>
          <span className="dashboard-eyebrow">
            MACHINE LEARNING WORKSPACE
          </span>

          <h1>
            AI Model
            <span> Manager</span>
          </h1>

          <p>
            Track, organize and manage your machine
            learning models from one place.
          </p>
        </div>

        <div className="hero-icon">
          <span>AI</span>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">
            ◈
          </div>

          <div>
            <span>Total Models</span>
            <strong>{totalModels}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            ✓
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedModels}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            %
          </div>

          <div>
            <span>Average Accuracy</span>
            <strong>{averageAccuracy}%</strong>
          </div>
        </div>

      </section>

      {/* Recent Models */}
      <section className="recent-section">

        <div className="section-heading">
          <div>
            <h2>Recent Models</h2>
            <p>
              Your latest machine learning models
            </p>
          </div>

          <span className="model-count">
            {models.length} models
          </span>
        </div>

        {recentModels.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              +
            </div>

            <h3>No models yet</h3>

            <p>
              Add your first AI model to start
              managing your experiments.
            </p>
          </div>
        ) : (
          <div className="recent-models">

            {recentModels.map((model) => (
              <div
                className="recent-model"
                key={model.id}
              >

                <div className="model-main">
                  <div className="model-avatar">
                    {model.name
                      ?.charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <h3>{model.name}</h3>

                    <p>
                      {model.dataset}
                      <span>•</span>
                      {model.framework}
                    </p>
                  </div>
                </div>

                <div className="model-metrics">

                  <div>
                    <span>Accuracy</span>
                    <strong>
                      {model.accuracy}%
                    </strong>
                  </div>

                  <div>
                    <span>F1 Score</span>
                    <strong>
                      {model.f1Score}
                    </strong>
                  </div>

                  <div>
                    <span>Epochs</span>
                    <strong>
                      {model.epochs}
                    </strong>
                  </div>

                </div>

                <span
                  className={`status-badge ${
                    model.status
                      ?.toLowerCase()
                      .replace(' ', '-')
                  }`}
                >
                  <span className="status-dot"></span>
                  {model.status}
                </span>

              </div>
            ))}

          </div>
        )}

      </section>

      {/* About */}
      <section className="about-section">

        <div className="about-content">
          <span className="about-label">
            ABOUT THE PROJECT
          </span>

          <h2>
            One workspace for
            <span> your AI models.</span>
          </h2>

          <p>
            AI Model Manager is a React-based
            application designed to organize and
            track machine learning experiments.
            Model information is stored locally
            in your browser using LocalStorage.
          </p>
        </div>

        <div className="about-tech">
          <span>REACT</span>
          <span>BOOTSTRAP</span>
          <span>LOCALSTORAGE</span>
        </div>

      </section>

    </main>
  )
}

export default Dashboard