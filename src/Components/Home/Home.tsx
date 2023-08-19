import React from "react";

export const Home: React.FC = () => {
    const homeStyles = {
        display: "flex",
        flexDirection: 'column' as 'column',
        alignItems: "center",
        justifyContent: "center",
        fontsize: 48,
    }
    return (
        <div style={homeStyles}>
            <h2>Домашняя страница</h2>
            <p>Раздел в разработке</p>
        </div>
    )
}