import React, { Component } from 'react'
import './footer.css';

export class Footer extends Component {
    render() {
        return (
            <>
                <div class="footer">
                    <div class="footer-container">
                        <div className='footer-content'>
                            <p>@copyright: </p>
                            <a href="https://akhils.space">My Website</a>
                            <p>Tel: +91 9791516477</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer
