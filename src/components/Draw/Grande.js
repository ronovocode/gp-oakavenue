import React, {createRef} from 'react'
import {Spring} from 'react-spring/renderprops';

// var items = ["fred", "fred", "burger"]

export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.ref = createRef();

        this.state ={
            length: 0
        }
    }

    componentDidMount() {
        this.setState({
            length: document.getElementById("Path_1").getTotalLength()
        })
    }
    
    render() {
        return (
            <Spring
                from={{ x: 0, y: 0 }}
                to={{ x: this.state.length, y: 15 }}
                config={{mass: 500, friction: 500, clamp: true}}>
                {props => (
                    <svg strokeDasharray={this.state.length} xmlns="http://www.w3.org/2000/svg" width="431.95" height="62.815"
                    viewBox="0 0 431.95 62.815" strokeDashoffset={this.state.length - props.x}>
                        <path id="Path_1" data-name="Path 1"
                            d="M24.18,67.33c0,1.17,1.5,1.885,1.69,1.885s.26-.195.26-.65c0-12.415,14.235-31.98,20.215-36.79.585-.39.91-.65.91-1.04,0-.845-1.755-3.25-2.6-3.25C40.885,27.485,24.18,54.525,24.18,67.33ZM61.75,19.75c-.52,0-.13,2.535-15.275,2.535C16.055,22.285,0,33.79,0,45.62c0,6.175,5.395,9.425,10.725,9.425,9.945,0,16.7-12.285,17.81-15.275a2.448,2.448,0,0,0,.26-.91.375.375,0,0,0-.39-.39c-.13,0-.26.13-.39.455-1.43,3.25-9.23,14.755-18.33,14.755C5.98,53.68,3.25,51.4,3.25,47.245,3.25,35.09,17.29,24.43,37.18,24.43c9.23,0,17.81.715,22.035.715,2.535,0,3.9-.52,3.9-1.885C63.115,21.18,62.27,19.75,61.75,19.75Zm2.73,35.49c.195-.195.715-.65.715-.78,0-.065-.13-.26-.26-.26-.195,0-.455.26-.455.26s-6.045,5.98-9.36,5.98c-.585,0-.975-.39-.975-1.17,0-2.73,5.135-6.89,5.135-8.775s-2.73-3.64-3.575-3.64c-1.43,0-11.18,6.175-14.235,12.155a17.731,17.731,0,0,1,1.3-4.68c2.8-2.73,19.565-16.51,19.565-22.815,0-1.235-1.69-2.665-3.25-2.665-6.175,0-21.06,20.54-21.06,32.89,0,1.1,1.04,2.47,1.885,2.47.39,0,.715-1.495,2.015-4.16,3.25-6.435,12.09-12.025,13.52-12.025.325,0,.455.195.455.39,0,.39-4.55,4.81-4.55,9.555,0,1.625,2.21,3.51,3.445,3.51C58.305,61.48,64.48,55.24,64.48,55.24ZM61.1,31.97c0,5.33-15.99,19.045-17.745,20.865,3.835-9.1,12.48-21.45,17.225-21.45C60.9,31.385,61.1,31.58,61.1,31.97Zm5.72,22.49c1.95-4.745,4.81-7.28,5.915-7.28.325,0,.52.195.52.715C73.255,49.39,69.745,52.51,66.82,54.46Zm2.665,6.565c-1.755,0-2.925-1.5-2.925-3.705a10.091,10.091,0,0,1,.195-2.015C70.33,53.1,74.62,49.65,74.62,47.83c0-.78-1.105-2.99-2.86-2.99-2.86,0-8.71,6.11-8.71,11.96a5.135,5.135,0,0,0,5.07,5.46c2.665,0,4.16-1.625,5.46-2.925.455-.455.65-.78.65-.975a.28.28,0,0,0-.26-.26c-.13,0-.325.195-.65.52C72.28,59.6,70.85,61.025,69.485,61.025Zm25.545-4.94c0-3.51,2.535-7.865,6.565-12.285,16.315-.585,44.07-11.375,44.07-19.435,0-2.6-2.21-4.615-6.5-4.615-13.455,0-32.24,10.79-41.34,22.425-6.37-.715-8.45-2.925-9.1-3.575-.195-.195-.26-.26-.39-.26s-.195.13-.195.26c0,.78,2.665,4.03,8.645,4.94-2.8,3.9-4.42,7.8-4.42,11.44,0,4.42,3.77,7.085,7.865,7.085,7.93,0,25.35-14.365,28.665-14.365a.837.837,0,0,1,.845.91c0,2.145-2.275,6.175-4.615,9.815-9.685,3.705-24.245,11.7-24.245,18.85a4.729,4.729,0,0,0,4.355,4.29c6.045,0,17.94-12.74,23.335-22.3a17.178,17.178,0,0,1,4.29-.65,17.94,17.94,0,0,1,1.82.13c.13,0,.2-.13.2-.26a3.9,3.9,0,0,0-2.47-1.43,15.418,15.418,0,0,0-2.925.455c1.3-2.21,3.12-5.655,3.12-7.215,0-1.885-2.86-3.77-4.355-3.77-2.99,0-20.8,14.69-27.755,14.69C96.72,61.22,95.03,59.27,95.03,56.085Zm45.37-33.8c2.145,0,3.64,1.17,3.64,2.73,0,7.085-27.105,16.38-41.015,17.225C112.9,32.165,129.8,22.285,140.4,22.285ZM101.725,77.4c0-6.435,12.935-13.91,22.36-17.29-6.11,8.71-16.835,19.24-20.54,19.24A1.744,1.744,0,0,1,101.725,77.4Zm31.46-16.7a6.77,6.77,0,0,1-.715-.065c-.195,0-.78.975-.78,1.17s.455.26.91.26A4.794,4.794,0,0,0,135.4,60.83c3.055-2.535,6.76-8.385,8.84-12.285.65.325,1.17.715,1.17,1.3,0,2.015-3.445,5.135-3.445,8.97,0,1.82,2.08,3.51,4.03,3.51,3.185,0,10.01-7.085,10.01-7.085.26-.26.585-.585.585-.715s-.065-.325-.26-.325c-.065,0-.2.13-.325.26,0,0-6.825,6.76-9.23,6.76a1.365,1.365,0,0,1-1.365-1.5c0-2.47,4.485-5.98,4.485-8.45,0-1.69-3.315-2.275-5.33-3.25,1.365-2.275,2.47-4.225,2.47-5.46a3.533,3.533,0,0,0-2.47-1.755c-1.5,0-4.42,2.145-4.42,4.55,0,1.495,1.95,2.275,3.51,2.925C141.7,51.99,135.785,60.7,133.185,60.7Zm12.8-17.745c0,.845-.91,2.86-1.95,4.81a1.787,1.787,0,0,1-.975-1.43A3.843,3.843,0,0,1,145.6,42.63.364.364,0,0,1,145.99,42.955ZM180.375,55.24c.2-.195.65-.65.65-.78a.273.273,0,0,0-.26-.26c-.13,0-.26.13-.39.26,0,0-6.175,6.175-9.36,6.175-.78,0-1.43-.39-1.43-1.235,0-2.015,2.86-4.16,
                            2.86-4.94a4.03,4.03,0,0,0-2.34-2.73c-.585,0-2.015,1.3-3.965,3.25-3.12,3.12-7.8,7.6-9.035,7.6a.755.755,0,0,1-.845-.845c0-4.485,8.45-13.585,14.56-13.585.455,0,1.17.585,1.17,1.04,0,.78-.325.975-.325,1.235a.857.857,0,0,0,.585.65c.2,0,.52-.65.52-1.69,0-1.43-2.47-3.7-5.005-3.7-5.59,0-14.43,8.97-14.43,14.17a4.275,4.275,0,0,0,3.77,3.77c1.5,0,6.045-4.68,9.295-7.865a15.177,15.177,0,0,0-.195,2.34,3.752,3.752,0,0,0,3.9,3.9C173.745,62,180.375,55.24,180.375,55.24Zm4.29-9.295c-.325,0-.65.065-.65.585-.91,5.005-7.54,12.935-7.54,14.235,0,1.365,1.1,2.99,1.755,2.99.585,0,1.105-3.185,5.265-7.02,3.575-3.315,8.58-5.785,9.295-5.785.13,0,.2.065.2.13,0,.455-3.055,4.55-3.055,7.41,0,2.145,2.08,4.16,3.705,4.16,3.445,0,10.92-7.41,10.92-7.41s.715-.65.715-.78a.356.356,0,0,0-.325-.26c-.13,0-.39.26-.39.26s-6.955,6.89-10.92,6.89a.8.8,0,0,1-.91-.845c0-3.445,4.94-8.32,4.94-9.035,0-.845-.78-2.73-1.82-2.73-2.47,0-9.425,4.615-11.83,6.5,1.43-2.47,3.185-4.94,3.185-6.11A3.746,3.746,0,0,0,184.665,45.945Zm35.1,11.31a19.317,19.317,0,0,1,.91-6.565c7.085-7.8,13.78-16.445,13.78-19.24,0-1.69-1.17-3.185-2.535-3.185-5.4,0-15.08,15.925-15.665,26-4.55,4.615-8.775,7.995-10.92,7.995a.527.527,0,0,1-.455-.585c0-3.51,7.215-13.13,10.92-13.13.26,0,.39-.13.39-.325,0-.585-1.755-1.5-3.9-1.5-3.12,0-10.4,8.385-10.4,13.13,0,1.56,2.08,3.51,3.25,3.51,2.08,0,6.435-3.445,11.115-8.06.13,7.28,3.575,10.465,6.37,10.465.325,0,.585-.13.585-.39a.28.28,0,0,0-.26-.26C221.39,64.86,219.765,61.415,219.765,57.255Zm13.52-25.22c0,2.08-5.785,9.88-12.22,17.1,2.47-7.865,8.255-17.81,11.505-17.81A.682.682,0,0,1,233.285,32.035Zm-5.59,22.425c1.95-4.745,4.81-7.28,5.915-7.28.325,0,.52.195.52.715C234.13,49.39,230.62,52.51,227.695,54.46Zm2.665,6.565c-1.755,0-2.925-1.5-2.925-3.705a10.093,10.093,0,0,1,.195-2.015c3.575-2.21,7.865-5.655,7.865-7.475,0-.78-1.1-2.99-2.86-2.99-2.86,0-8.71,6.11-8.71,11.96a5.135,5.135,0,0,0,5.07,5.46c2.665,0,4.16-1.625,5.46-2.925.455-.455.65-.78.65-.975a.28.28,0,0,0-.26-.26c-.13,0-.325.195-.65.52C233.155,59.6,231.725,61.025,230.36,61.025Zm31.655,6.305c-5.59,0-9.23-2.6-9.23-7.8,0-16.51,26.26-36.79,39.13-36.79,2.4,0,3.835,1.43,3.835,2.795,0,5.135-8.58,10.92-13,11.7-.2.065-.39.13-.39.39,0,.39,1.56,1.43,3.12,1.43,2.015,0,11.31-7.865,11.31-12.545a6.766,6.766,0,0,0-6.7-6.76c-13.78,0-41.08,20.6-41.08,37.31,0,6.5,7.085,11.83,13.26,11.83,9.555,0,21.125-8.84,25.74-13.65,0,0,.65-.65.65-.78a.273.273,0,0,0-.26-.26c-.13,0-.39.26-.39.26C281.515,60.9,272.74,67.33,262.015,67.33ZM306.02,55.24c.2-.195.715-.65.715-.78a.356.356,0,0,0-.325-.26c-.195,0-.39.26-.39.26-2.015,2.015-5.4,4.68-9.3,4.94,2.8-2.47,5.59-6.175,5.59-10.465,0-2.73-2.145-4.615-5.07-4.615-3.445,0-9.425,3.965-9.425,9.49,0,.2.065.325.065.455a9.234,9.234,0,0,0-.715,3.575,4.687,4.687,0,0,0,4.355,4.55c.845,0,2.6-.845,4.485-2.34C301.015,59.855,304.07,56.995,306.02,55.24Zm-13.455-6.89a18.146,18.146,0,0,0-3.835,4.16c.78-4.29,5.395-7.28,7.93-7.28s3.77,1.365,3.77,3.51c0,4.225-2.665,8.385-5.4,10.79a7.161,7.161,0,0,1-5.395-2.4c1.43-2.86,4.745-5.72,7.15-7.15.39-.195.845-.455.845-.845,0-.65-1.3-2.47-2.08-2.47A5.68,5.68,0,0,0,292.565,48.35Zm-3.25,9.555a7.948,7.948,0,0,0,5.135,2.145,6.673,6.673,0,0,1-3.575,1.56,1.946,1.946,0,0,1-1.82-2.145A4.37,4.37,0,0,1,289.315,57.9Zm21.06,4.55c-.91,0-1.625-.52-1.625-2.08a24.091,24.091,0,0,1,1.56-6.695c6.3-5.915,15.925-15.925,15.925-20.345a3.527,3.527,0,0,0-3.38-3.575c-4.94,0-17.1,17.81-17.1,30.16,0,2.665,1.495,3.965,3.25,3.965,2.47,0,7.8-5.655,10.53-7.995a23.164,23.164,0,0,0-.455,3.38c0,2.665,1.495,3.965,3.25,3.965,3.575,0,12.025-8,12.025-8,.2-.195.65-.65.65-.78a.273.273,
                            0,0,0-.26-.26c-.13,0-.26.13-.39.26,0,0-8.06,7.345-10.66,7.345-.91,0-1.625-.52-1.625-2.08a21.513,21.513,0,0,1,1.235-6.045c6.3-5.915,16.77-17.615,16.77-22.035a3.527,3.527,0,0,0-3.38-3.575c-4.55,0-13.91,15.535-17.1,26.91C317.07,57.19,312.13,62.455,310.375,62.455Zm13.455-10.27c1.69-6.37,10.6-21.45,14.235-21.45a.784.784,0,0,1,.845.845C338.91,35.545,328.9,47.18,323.83,52.185Zm-13,0c1.69-6.37,9.75-19.76,13.39-19.76a.784.784,0,0,1,.845.845C325.065,37.235,315.9,47.18,310.83,52.185Zm26.2,2.275c1.95-4.745,4.485-7.28,5.59-7.28.325,0,.52.195.52.715C343.135,49.39,339.95,52.51,337.025,54.46Zm12.415,0s-6.37,6.565-9.815,6.565c-1.885,0-2.86-1.69-2.86-3.705a10.091,10.091,0,0,1,.2-2.015c3.575-2.21,7.54-5.655,7.54-7.475,0-.78-1.105-2.99-2.86-2.99-2.86,0-8.71,6.11-8.71,11.96,0,3.38,1.755,5.46,5.07,5.46,5,0,11.44-7.02,11.44-7.02.2-.195.65-.65.65-.78a.273.273,0,0,0-.26-.26C349.7,54.2,349.44,54.46,349.44,54.46Zm17.225.78c.2-.195.65-.65.65-.78,0-.065-.13-.26-.26-.26s-.39.26-.39.26-8.645,8.255-13.455,8.255c-1.69,0-2.47-1.235-2.47-2.86,0-5.525,6.305-11.9,9.75-11.9a.612.612,0,0,1,.65.65,5.334,5.334,0,0,1-1.69,2.925.594.594,0,0,0-.2.325.14.14,0,0,0,.13.13,2.729,2.729,0,0,0,.91-.195,5.367,5.367,0,0,0,1.69-3.25,3.113,3.113,0,0,0-3.25-2.925c-4.03,0-11.245,7.215-11.245,13.715a4.584,4.584,0,0,0,4.81,4.615C357.63,63.95,366.665,55.24,366.665,55.24Zm12.61-17.68c1.885-2.6,3.12-4.42,3.12-5.005,0-1.885-2.08-4.485-2.99-4.485-.195,0-.325.13-.325.455,0,1.625-1.885,5.07-4.29,9.295a23.128,23.128,0,0,0-5.85,1.105c-.325.13-.325.26-.325.39,0,.39.845,1.495,1.365,1.495a15.73,15.73,0,0,1,3.77-1.1c-4.16,7.345-9.23,16.38-9.23,22.685,0,4.355,3.055,6.435,4.745,6.435.26,0,.65-.065.65-.325a.768.768,0,0,0-.585-.585c-2.015,0-3.12-1.17-3.12-4.03,0-7.475,7.475-18.33,12.22-25.155a13.011,13.011,0,0,1,3.315-.325,41.5,41.5,0,0,1,5.915.455c.13,0,.26-.195.26-.39a26.8,26.8,0,0,0-7.085-.91Zm1.17,7.93c-.325,0-.585.26-.78.65-1.235,3.055-6.89,10.27-6.89,13.13a3.838,3.838,0,0,0,3.12,3.575c4.225,0,12.155-7.605,12.155-7.605.195-.195.715-.65.715-.78,0-.065-.13-.26-.26-.26-.2,0-.455.26-.455.26s-7.54,7.15-11.245,7.15a.976.976,0,0,1-1.04-1.1c0-2.8,7.41-11.18,7.41-12.35A3.106,3.106,0,0,0,380.445,45.49Zm6.435-11.83a.238.238,0,0,0-.26.26c0,1.56-2.47,4.81-2.47,6.37a.375.375,0,0,0,.39.39c.26,0,.65-.715,1.885-1.1a18.9,18.9,0,0,0,1.82-.65,3.905,3.905,0,0,0,1.365-2.08C389.61,35.935,387.92,33.66,386.88,33.66Zm19.175,21.58c.2-.195.715-.65.715-.78a.356.356,0,0,0-.325-.26c-.195,0-.39.26-.39.26-2.015,2.015-5.4,4.68-9.3,4.94,2.8-2.47,5.59-6.175,5.59-10.465,0-2.73-2.145-4.615-5.07-4.615-3.445,0-9.425,3.965-9.425,9.49,0,.2.065.325.065.455a9.234,9.234,0,0,0-.715,3.575,4.687,4.687,0,0,0,4.355,4.55c.845,0,2.6-.845,4.485-2.34C401.05,59.855,404.1,56.995,406.055,55.24ZM392.6,48.35a18.146,18.146,0,0,0-3.835,4.16c.78-4.29,5.395-7.28,7.93-7.28s3.77,1.365,3.77,3.51c0,4.225-2.665,8.385-5.4,10.79a7.161,7.161,0,0,1-5.395-2.4c1.43-2.86,4.745-5.72,7.15-7.15.39-.195.845-.455.845-.845,0-.65-1.3-2.47-2.08-2.47A5.68,5.68,0,0,0,392.6,48.35ZM389.35,57.9a7.948,7.948,0,0,0,5.135,2.145,6.673,6.673,0,0,1-3.575,1.56,1.946,1.946,0,0,1-1.82-2.145A4.37,4.37,0,0,1,389.35,57.9Zm21-11.96c-.325,0-.65.065-.65.585-.91,5.005-7.54,12.935-7.54,14.235,0,1.365,1.1,2.99,1.755,2.99.585,0,1.1-3.185,5.265-7.02,3.575-3.315,8.58-5.785,9.3-5.785.13,0,.195.065.195.13,0,.455-3.055,4.55-3.055,7.41,0,2.145,2.08,4.16,3.705,4.16,3.445,0,10.92-7.41,10.92-7.41s.715-.65.715-.78a.356.356,0,0,0-.325-.26c-.13,0-.39.26-.39.26s-6.955,6.89-10.92,6.89a.8.8,0,0,1-.91-.845c0-3.445,4.94-8.32,4.94-9.035,0-.845-.78-2.73-1.82-2.73-2.47,0-9.425,4.615-11.83,6.5,1.43-2.47,3.185-4.94,3.185-6.11A3.746,3.746,0,0,0,410.345,45.945Z"
                            transform="translate(0.5 -19.25)" fill-opacity={props.y / 15} fill="#D2cca1" stroke="#d2cca1" strokeWidth="1" />
                    </svg>
                )}
            </Spring>
    
        )
    }
}

