import React from 'react'

const MoneySvg = ({ color, type }) => {
    return (
        <div>
            {type === "total" && <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill={color} />
                <path d="M47.3333 43H17V40.8333H45.1667V25.6667H47.3333V43Z" fill={color} />
                <path d="M40.8334 21.3333V36.5H14.8334V21.3333H40.8334ZM43.0001 19.1667H12.6667V38.6667H43.0001V19.1667Z" fill={color} />
                <path d="M19.1667 25.6667H17V32.1667H19.1667V34.3333H27.8333C24.8412 34.3333 22.4167 31.9088 22.4167 28.9167C22.4167 25.9245 24.8412 23.5 27.8333 23.5H19.1667V25.6667Z" fill={color} />
                <path d="M36.4999 25.6667V23.5H27.8333C30.8254 23.5 33.2499 25.9245 33.2499 28.9167C33.2499 31.9088 30.8254 34.3333 27.8333 34.3333H36.4999V32.1667H38.6666V25.6667H36.4999Z" fill={color} />
            </svg>}
            {type === "sale" && <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#E63E36" />
                <path d="M25.25 34.6392H30V42.5558H25.25V34.6392Z" fill="#E63E36" />
                <path d="M18.9167 39.3892H23.6667V42.5558H18.9167V39.3892Z" fill="#E63E36" />
                <path d="M37.9167 36.2225H42.6667V42.5558H37.9167V36.2225Z" fill="#E63E36" />
                <path d="M31.5833 31.4725H36.3333V42.5558H31.5833V31.4725Z" fill="#E63E36" />
                <path d="M42.6666 17.3333L33.6733 25.2025L25.0124 22.5108L17.3333 28.4642V31.4725L25.4874 25.1392L34.2433 27.8625L42.6666 20.4842V17.3333V17.3333Z" fill="#E63E36" />
            </svg>}
            {type === "recieved" && <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill={color} />
                <path d="M30 12L34 18H32V22H28V18H26L30 12Z" fill={color} />
                <path d="M44 26V42H16V26H44ZM46 24H14V44H46V24Z" fill={color} />
                <path d="M30 28C33.314 28 36 30.686 36 34C36 37.314 33.314 40 30 40H40V38H42V30H40V28H30Z" fill={color} />
                <path d="M24 34C24 30.686 26.686 28 30 28H20V30H18V38H20V40H30C26.686 40 24 37.314 24 34Z" fill={color} />
            </svg>}
            {type === "paid" && <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill={color} />
                <path d="M29.9999 47.6667L33.6666 42.1667H31.8333V38.5H28.1666V42.1667H26.3333L29.9999 47.6667Z" fill={color} />
                <path d="M42.8333 34.8333V20.1667H17.1666V34.8333H42.8333ZM44.6666 36.6667H15.3333V18.3333H44.6666V36.6667Z" fill={color} />
                <path d="M30 33C33.0378 33 35.5 30.5378 35.5 27.5C35.5 24.4622 33.0378 22 30 22H39.1667V23.8333H41V31.1667H39.1667V33H30Z" fill={color} />
                <path d="M24.5 27.5C24.5 30.5378 26.9622 33 30 33H20.8333V31.1667H19V23.8333H20.8333V22H30C26.9622 22 24.5 24.4622 24.5 27.5Z" fill={color} />
            </svg>}
        </div>
    )
}

export default MoneySvg