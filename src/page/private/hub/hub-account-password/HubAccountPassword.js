import React from 'react'

const HubAccountPassword = () => {
  return (
    <div className="account-hub-content">
        <div className="section-header">
        <div className="section-header-info">
            <p className="section-pretitle">Account</p>

            <h2 className="section-title">Change Password</h2>
        </div>
        </div>

        <div className="grid-column">
        <div className="widget-box">
            <div className="widget-box-content">
            <form className="form">
                <div className="form-row">
                <div className="form-item">
                    <div className="form-input small">
                    <label for="account-current-password">Confirm your Current Password</label>
                    <input type="password" id="account-current-password" name="account_current_password"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <div className="form-input small">
                    <label for="account-new-password">Your New Password</label>
                    <input type="password" id="account-new-password" name="account_new_password"/>
                    </div>
                </div>

                <div className="form-item">
                    <div className="form-input small">
                    <label for="account-new-password-confirm">Confirm New Password</label>
                    <input type="password" id="account-new-password-confirm" name="account_new_password_confirm"/>
                    </div>
                </div>
                </div>

                <div className="form-row split">
                <div className="form-item">
                    <p className="button full secondary">Forgot your Password?</p>
                </div>

                <div className="form-item">
                    <p className="button full primary">Change Password Now!</p>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HubAccountPassword