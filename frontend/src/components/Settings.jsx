import React, { useState } from 'react'
import { Settings as SettingsIcon, User, Bell, Shield, Database, Wifi, Save, RefreshCw } from 'lucide-react'
import './style/Settings.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    // General Settings
    systemName: 'Perishable Goods Monitor',
    timezone: 'UTC-5',
    language: 'English',
    dateFormat: 'MM/DD/YYYY',
    temperatureUnit: 'Celsius',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    alertThreshold: 'medium',
    notificationFrequency: 'immediate',
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    loginAttempts: '5',
    
    // System Settings
    dataRetention: '365',
    backupFrequency: 'daily',
    autoUpdates: true,
    debugMode: false,
    
    // Sensor Settings
    sensorScanInterval: '60',
    temperatureThreshold: '15',
    humidityThreshold: '80',
    batteryWarningLevel: '20'
  })

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'system', label: 'System', icon: Database },
    { id: 'sensors', label: 'Sensors', icon: Wifi }
  ]

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings)
    // In a real app, this would save to backend
  }

  const handleResetSettings = () => {
    console.log('Resetting settings to defaults')
    // In a real app, this would reset to default values
  }

  const renderGeneralSettings = () => (
    <div className="settings-section">
      <h3>General Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label className="setting-label">System Name</label>
          <input
            type="text"
            value={settings.systemName}
            onChange={(e) => handleSettingChange('systemName', e.target.value)}
            className="setting-input"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Timezone</label>
          <select
            value={settings.timezone}
            onChange={(e) => handleSettingChange('timezone', e.target.value)}
            className="setting-select"
          >
            <option value="UTC-8">Pacific Time (UTC-8)</option>
            <option value="UTC-7">Mountain Time (UTC-7)</option>
            <option value="UTC-6">Central Time (UTC-6)</option>
            <option value="UTC-5">Eastern Time (UTC-5)</option>
            <option value="UTC+0">UTC</option>
          </select>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Language</label>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className="setting-select"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Date Format</label>
          <select
            value={settings.dateFormat}
            onChange={(e) => handleSettingChange('dateFormat', e.target.value)}
            className="setting-select"
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Temperature Unit</label>
          <div className="setting-radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="temperatureUnit"
                value="Celsius"
                checked={settings.temperatureUnit === 'Celsius'}
                onChange={(e) => handleSettingChange('temperatureUnit', e.target.value)}
              />
              <span>Celsius (°C)</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="temperatureUnit"
                value="Fahrenheit"
                checked={settings.temperatureUnit === 'Fahrenheit'}
                onChange={(e) => handleSettingChange('temperatureUnit', e.target.value)}
              />
              <span>Fahrenheit (°F)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="settings-section">
      <h3>Notification Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label className="setting-label">Email Notifications</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">SMS Notifications</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.smsNotifications}
              onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Push Notifications</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Alert Threshold</label>
          <select
            value={settings.alertThreshold}
            onChange={(e) => handleSettingChange('alertThreshold', e.target.value)}
            className="setting-select"
          >
            <option value="low">Low - All alerts</option>
            <option value="medium">Medium - Important alerts</option>
            <option value="high">High - Critical alerts only</option>
          </select>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Notification Frequency</label>
          <select
            value={settings.notificationFrequency}
            onChange={(e) => handleSettingChange('notificationFrequency', e.target.value)}
            className="setting-select"
          >
            <option value="immediate">Immediate</option>
            <option value="hourly">Hourly digest</option>
            <option value="daily">Daily digest</option>
            <option value="weekly">Weekly digest</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="settings-section">
      <h3>Security Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label className="setting-label">Two-Factor Authentication</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Session Timeout (minutes)</label>
          <input
            type="number"
            value={settings.sessionTimeout}
            onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
            className="setting-input"
            min="5"
            max="480"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Password Expiry (days)</label>
          <input
            type="number"
            value={settings.passwordExpiry}
            onChange={(e) => handleSettingChange('passwordExpiry', e.target.value)}
            className="setting-input"
            min="30"
            max="365"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Max Login Attempts</label>
          <input
            type="number"
            value={settings.loginAttempts}
            onChange={(e) => handleSettingChange('loginAttempts', e.target.value)}
            className="setting-input"
            min="3"
            max="10"
          />
        </div>
      </div>
    </div>
  )

  const renderSystemSettings = () => (
    <div className="settings-section">
      <h3>System Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label className="setting-label">Data Retention (days)</label>
          <input
            type="number"
            value={settings.dataRetention}
            onChange={(e) => handleSettingChange('dataRetention', e.target.value)}
            className="setting-input"
            min="30"
            max="2555"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Backup Frequency</label>
          <select
            value={settings.backupFrequency}
            onChange={(e) => handleSettingChange('backupFrequency', e.target.value)}
            className="setting-select"
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Automatic Updates</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.autoUpdates}
              onChange={(e) => handleSettingChange('autoUpdates', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Debug Mode</label>
          <div className="setting-toggle">
            <input
              type="checkbox"
              checked={settings.debugMode}
              onChange={(e) => handleSettingChange('debugMode', e.target.checked)}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSensorSettings = () => (
    <div className="settings-section">
      <h3>Sensor Settings</h3>
      <div className="settings-grid">
        <div className="setting-item">
          <label className="setting-label">Sensor Scan Interval (seconds)</label>
          <input
            type="number"
            value={settings.sensorScanInterval}
            onChange={(e) => handleSettingChange('sensorScanInterval', e.target.value)}
            className="setting-input"
            min="10"
            max="3600"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Temperature Alert Threshold (°C)</label>
          <input
            type="number"
            value={settings.temperatureThreshold}
            onChange={(e) => handleSettingChange('temperatureThreshold', e.target.value)}
            className="setting-input"
            min="-20"
            max="50"
            step="0.1"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Humidity Alert Threshold (%)</label>
          <input
            type="number"
            value={settings.humidityThreshold}
            onChange={(e) => handleSettingChange('humidityThreshold', e.target.value)}
            className="setting-input"
            min="0"
            max="100"
          />
        </div>
        
        <div className="setting-item">
          <label className="setting-label">Battery Warning Level (%)</label>
          <input
            type="number"
            value={settings.batteryWarningLevel}
            onChange={(e) => handleSettingChange('batteryWarningLevel', e.target.value)}
            className="setting-input"
            min="5"
            max="50"
          />
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return renderGeneralSettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'security':
        return renderSecuritySettings()
      case 'system':
        return renderSystemSettings()
      case 'sensors':
        return renderSensorSettings()
      default:
        return renderGeneralSettings()
    }
  }

  return (
    <div className="settings-page fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-title">
            <SettingsIcon size={24} />
            <div>
              <h1>System Settings</h1>
              <p>Configure system preferences and behavior</p>
            </div>
          </div>
          <div className="header-actions">
            <button 
              className="btn btn-secondary"
              onClick={handleResetSettings}
            >
              <RefreshCw size={18} />
              Reset to Defaults
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleSaveSettings}
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="settings-container">
        {/* Settings Tabs */}
        <div className="settings-sidebar">
          <div className="settings-tabs">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent size={20} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Settings Content */}
        <div className="settings-content">
          <div className="settings-panel">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings