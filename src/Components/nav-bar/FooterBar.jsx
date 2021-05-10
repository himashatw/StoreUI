import React, { Component } from 'react'

class FooterBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
               <footer className="bg-dark text-center text-white">              
                    <div className="text-center p-3"> 
                    All Rights Reserved 2021 @
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterBar;