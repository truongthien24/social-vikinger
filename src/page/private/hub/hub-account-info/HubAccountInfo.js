import React from 'react'

const HubAccountInfo = () => {
  return (
    <div class="account-hub-content">
        <div class="section-header">
        <div class="section-header-info">
            <p class="section-pretitle">Account</p>

            <h2 class="section-title">Account Info</h2>
        </div>
        </div>

        <div class="grid-column">
        <div class="widget-box">
            <p class="widget-box-title">Personal Info</p>

            <div class="widget-box-content">
            <form class="form">
                <div class="form-row split">
                <div class="form-item">
                    <div class="form-input small active">
                    <label for="account-full-name">Full Name</label>
                    <input type="text" id="account-full-name" name="account_full_name" value="Marina Valentine"/>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small active">
                    <label for="account-email">Account Email</label>
                    <input type="text" id="account-email" name="account_email" value="ghuntress@yourmail.com"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-input small active">
                    <label for="account-url-username">URL Username: www.vikinger.com/</label>
                    <input type="text" id="account-url-username" name="account_url_username" value="marinavalentine"/>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-phone">Phone Number</label>
                    <input type="text" id="account-phone" name="account_phone"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-select">
                    <label for="account-country">Country</label>
                    <select id="account-country" name="account_country">
                        <option value="0">Select your Country</option>
                        <option value="1" selected>United States</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-select">
                    <label for="account-language">Language</label>
                    <select id="account-language" name="account_language">
                        <option value="1" selected>English (United States)</option>
                        <option value="2">Spanish (Latin America)</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>

        <div class="widget-box">
            <p class="widget-box-title">Security Info</p>

            <div class="widget-box-content">
            <form class="form">
                <div class="form-row split">
                <div class="form-item">
                    <div class="form-input small active">
                    <label for="account-recovery-email">Recovery Email</label>
                    <input type="text" id="account-recovery-email" name="account_recovery_email" value="ghuntress@streamer.com"/>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small active">
                    <label for="account-recovery-phone">Recovery Phone</label>
                    <input type="text" id="account-recovery-phone" name="account_recovery_phone" value="+1234 (12) 555 7890"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-select">
                    <label for="account-recovery-question-1">Security Question 01</label>
                    <select id="account-recovery-question-1" name="account_recovery_question_1">
                        <option value="1">What's your favourite food?</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-recovery-answer-1">Answer 01</label>
                    <input type="text" id="account-recovery-answer-1" name="account_recovery_answer_1"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-select">
                    <label for="account-recovery-question-2">Security Question 02</label>
                    <select id="account-recovery-question-2" name="account_recovery_question_2">
                        <option value="1">What's the name of your pet?</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-recovery-answer-2">Answer 02</label>
                    <input type="text" id="account-recovery-answer-2" name="account_recovery_answer_2"/>
                    </div>
                </div>
                </div>

                <div class="form-row split">
                <div class="form-item">
                    <div class="form-select">
                    <label for="account-recovery-question-3">Security Question 03</label>
                    <select id="account-recovery-question-3" name="account_recovery_question_3">
                        <option value="1">What's your favourite sport?</option>
                    </select>
                    <svg class="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow"></use>
                    </svg>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-input small">
                    <label for="account-recovery-answer-3">Answer 03</label>
                    <input type="text" id="account-recovery-answer-3" name="account_recovery_answer_3"/>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HubAccountInfo