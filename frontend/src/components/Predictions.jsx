import React, { useState } from 'react'
import { Brain, Zap, Target, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import './style/Predictions.css'

const Predictions = () => {
  const [selectedPrediction, setSelectedPrediction] = useState(null)

  // Mock prediction data
  const predictions = [
    {
      id: 1,
      item: 'Fresh Milk Batch #DF2025001',
      category: 'Dairy',
      location: 'Refrigerator A1',
      currentRisk: 25,
      predictedRisk: 85,
      timeframe: '48 hours',
      confidence: 94,
      factors: [
        { factor: 'Temperature fluctuation', impact: 'High', value: '+15%' },
        { factor: 'Humidity increase', impact: 'Medium', value: '+8%' },
        { factor: 'Storage duration', impact: 'High', value: '+12%' }
      ],
      recommendations: [
        'Move to front shelf for priority sale',
        'Apply 15% discount to accelerate turnover',
        'Monitor temperature closely'
      ],
      status: 'warning'
    },
    {
      id: 2,
      item: 'Organic Vegetables Batch #GF2025003',
      category: 'Produce',
      location: 'Storage Room C3',
      currentRisk: 65,
      predictedRisk: 95,
      timeframe: '24 hours',
      confidence: 89,
      factors: [
        { factor: 'High ambient temperature', impact: 'Critical', value: '+25%' },
        { factor: 'Extended storage time', impact: 'High', value: '+18%' },
        { factor: 'Humidity levels', impact: 'Medium', value: '+7%' }
      ],
      recommendations: [
        'Immediate sale or discount required',
        'Transfer to cooler storage if possible',
        'Bundle with other items for combo deals'
      ],
      status: 'critical'
    },
    {
      id: 3,
      item: 'Insulin Vials Batch #MS2025002',
      category: 'Medicine',
      location: 'Medicine Cabinet D4',
      currentRisk: 15,
      predictedRisk: 35,
      timeframe: '7 days',
      confidence: 96,
      factors: [
        { factor: 'Stable temperature', impact: 'Low', value: '+2%' },
        { factor: 'Controlled humidity', impact: 'Low', value: '+1%' },
        { factor: 'Approaching expiry', impact: 'Medium', value: '+5%' }
      ],
      recommendations: [
        'Continue current storage conditions',
        'Schedule routine quality check',
        'Plan distribution within 5 days'
      ],
      status: 'good'
    },
    {
      id: 4,
      item: 'Fresh Bread Batch #LB2025006',
      category: 'Bakery',
      location: 'Storage Room C3',
      currentRisk: 80,
      predictedRisk: 98,
      timeframe: '12 hours',
      confidence: 92,
      factors: [
        { factor: 'High moisture content', impact: 'Critical', value: '+30%' },
        { factor: 'Room temperature storage', impact: 'High', value: '+20%' },
        { factor: 'Short shelf life', impact: 'High', value: '+15%' }
      ],
      recommendations: [
        'Immediate clearance sale required',
        'Consider donation if unsold',
        'Review storage protocols'
      ],
      status: 'critical'
    },
    {
      id: 5,
      item: 'Frozen Meat Batch #PM2025004',
      category: 'Protein',
      location: 'Freezer B2',
      currentRisk: 5,
      predictedRisk: 12,
      timeframe: '30 days',
      confidence: 98,
      factors: [
        { factor: 'Optimal freezing temperature', impact: 'Low', value: '+1%' },
        { factor: 'Low humidity', impact: 'Low', value: '+0.5%' },
        { factor: 'Extended shelf life', impact: 'Low', value: '+2%' }
      ],
      recommendations: [
        'Maintain current storage conditions',
        'No immediate action required',
        'Schedule next review in 2 weeks'
      ],
      status: 'excellent'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle size={16} className="status-excellent" />
      case 'good':
        return <CheckCircle size={16} className="status-good" />
      case 'warning':
        return <AlertCircle size={16} className="status-warning" />
      case 'critical':
        return <AlertCircle size={16} className="status-critical" />
      default:
        return <Clock size={16} className="status-unknown" />
    }
  }

  const getRiskColor = (risk) => {
    if (risk >= 80) return 'risk-critical'
    if (risk >= 60) return 'risk-high'
    if (risk >= 40) return 'risk-medium'
    return 'risk-low'
  }

  const getImpactColor = (impact) => {
    switch (impact.toLowerCase()) {
      case 'critical':
        return 'impact-critical'
      case 'high':
        return 'impact-high'
      case 'medium':
        return 'impact-medium'
      case 'low':
        return 'impact-low'
      default:
        return 'impact-low'
    }
  }

  const criticalPredictions = predictions.filter(p => p.status === 'critical').length
  const warningPredictions = predictions.filter(p => p.status === 'warning').length
  const avgConfidence = predictions.reduce((sum, p) => sum + p.confidence, 0) / predictions.length

  return (
    <div className="predictions-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <Brain size={24} />
            <div>
              <h1>AI Predictions</h1>
              <p>Machine learning powered spoilage predictions and recommendations</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <Target size={18} />
              Calibrate Model
            </button>
            <button className="btn btn-primary">
              <Zap size={18} />
              Run Predictions
            </button>
          </div>
        </div>
      </div>

      {/* Prediction Overview */}
      <div className="prediction-overview">
        <div className="overview-card critical">
          <div className="overview-icon">
            <AlertCircle size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{criticalPredictions}</span>
            <span className="overview-label">Critical Alerts</span>
          </div>
        </div>
        <div className="overview-card warning">
          <div className="overview-icon">
            <AlertCircle size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{warningPredictions}</span>
            <span className="overview-label">Warnings</span>
          </div>
        </div>
        <div className="overview-card confidence">
          <div className="overview-icon">
            <Brain size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{avgConfidence.toFixed(0)}%</span>
            <span className="overview-label">Avg Confidence</span>
          </div>
        </div>
        <div className="overview-card predictions">
          <div className="overview-icon">
            <TrendingUp size={24} />
          </div>
          <div className="overview-info">
            <span className="overview-value">{predictions.length}</span>
            <span className="overview-label">Active Predictions</span>
          </div>
        </div>
      </div>

      {/* Predictions List */}
      <div className="predictions-container">
        <div className="predictions-list">
          <div className="list-header">
            <h3>Current Predictions</h3>
            <span className="list-subtitle">AI-powered spoilage risk assessments</span>
          </div>
          
          <div className="predictions-grid">
            {predictions.map((prediction) => (
              <div
                key={prediction.id}
                className={`prediction-card ${prediction.status} ${selectedPrediction?.id === prediction.id ? 'selected' : ''}`}
                onClick={() => setSelectedPrediction(prediction)}
              >
                <div className="prediction-header">
                  <div className="prediction-info">
                    <h4 className="prediction-item">{prediction.item}</h4>
                    <p className="prediction-location">{prediction.location}</p>
                  </div>
                  <div className="prediction-status">
                    {getStatusIcon(prediction.status)}
                  </div>
                </div>

                <div className="risk-comparison">
                  <div className="risk-item">
                    <span className="risk-label">Current Risk</span>
                    <div className="risk-bar">
                      <div 
                        className={`risk-fill ${getRiskColor(prediction.currentRisk)}`}
                        style={{ width: `${prediction.currentRisk}%` }}
                      />
                    </div>
                    <span className="risk-value">{prediction.currentRisk}%</span>
                  </div>
                  <div className="risk-item">
                    <span className="risk-label">Predicted Risk ({prediction.timeframe})</span>
                    <div className="risk-bar">
                      <div 
                        className={`risk-fill ${getRiskColor(prediction.predictedRisk)}`}
                        style={{ width: `${prediction.predictedRisk}%` }}
                      />
                    </div>
                    <span className="risk-value">{prediction.predictedRisk}%</span>
                  </div>
                </div>

                <div className="prediction-footer">
                  <div className="confidence-badge">
                    <Brain size={12} />
                    <span>{prediction.confidence}% confidence</span>
                  </div>
                  <div className="category-badge">
                    {prediction.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prediction Details */}
        {selectedPrediction && (
          <div className="prediction-details">
            <div className="details-header">
              <h3>Prediction Details</h3>
              <button 
                className="close-btn"
                onClick={() => setSelectedPrediction(null)}
              >
                ✕
              </button>
            </div>

            <div className="details-content">
              <div className="details-section">
                <h4>Risk Analysis</h4>
                <div className="risk-analysis">
                  <div className="risk-chart">
                    <div className="risk-current">
                      <span className="risk-chart-label">Current</span>
                      <div className={`risk-circle ${getRiskColor(selectedPrediction.currentRisk)}`}>
                        <span className="risk-percentage">{selectedPrediction.currentRisk}%</span>
                      </div>
                    </div>
                    <div className="risk-arrow">→</div>
                    <div className="risk-predicted">
                      <span className="risk-chart-label">Predicted</span>
                      <div className={`risk-circle ${getRiskColor(selectedPrediction.predictedRisk)}`}>
                        <span className="risk-percentage">{selectedPrediction.predictedRisk}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="risk-info">
                    <div className="risk-detail">
                      <span className="detail-label">Timeframe:</span>
                      <span className="detail-value">{selectedPrediction.timeframe}</span>
                    </div>
                    <div className="risk-detail">
                      <span className="detail-label">Confidence:</span>
                      <span className="detail-value">{selectedPrediction.confidence}%</span>
                    </div>
                    <div className="risk-detail">
                      <span className="detail-label">Risk Increase:</span>
                      <span className="detail-value">
                        +{selectedPrediction.predictedRisk - selectedPrediction.currentRisk}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4>Contributing Factors</h4>
                <div className="factors-list">
                  {selectedPrediction.factors.map((factor, index) => (
                    <div key={index} className="factor-item">
                      <div className="factor-info">
                        <span className="factor-name">{factor.factor}</span>
                        <span className={`factor-impact ${getImpactColor(factor.impact)}`}>
                          {factor.impact} Impact
                        </span>
                      </div>
                      <span className="factor-value">{factor.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h4>AI Recommendations</h4>
                <div className="recommendations-list">
                  {selectedPrediction.recommendations.map((recommendation, index) => (
                    <div key={index} className="recommendation-item">
                      <div className="recommendation-icon">
                        <Zap size={14} />
                      </div>
                      <span className="recommendation-text">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Predictions