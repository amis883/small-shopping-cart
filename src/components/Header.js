import React from 'react'

export default function Header(props) {
    const { countCartItems } = props;
    return (<header className="row block center">
        <div>
            <a href="#"><h1>Small Shopping Cart</h1></a>
        </div>
        <div className="wrap-badge">
            <a href="#/cart" className="wrap-badge-cart">
                Cart{' '}
                {props.countCartItems ? (
                    <button className="badge">{props.countCartItems}
                    </button>) : (
                        ''
                    )}
            </a>
            <a href="#/signin">SignIn</a>
        </div>
    </header>

    )
}