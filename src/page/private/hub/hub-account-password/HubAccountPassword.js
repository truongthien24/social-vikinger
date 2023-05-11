import React from 'react'

const HubAccountPassword = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Account</p>

            <h2 class="section-title">Change Password</h2>
        </div>
        </div>

        <div class="grid-column">
        <div class="widget-box">
            <div class="widget-box-content">
            <form class="form">
                <div class="form-row">
                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-current-password">Confirm your Current Password</label>
                    <input type="password" id="account-current-password" name="account_current_password"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-new-password">Your New Password</label>
                    <input type="password" id="account-new-password" name="account_new_password"/>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-new-password-confirm">Confirm New Password</label>
                    <input type="password" id="account-new-password-confirm" name="account_new_password_confirm"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <p class="button full secondary">Forgot your Password?</p>
                </div>

                <div class="form-item">
                    <p class="button full primary">Change Password Now!</p>
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