"use client"

import StyledComponentsRegistry from "./Registry";

const Providers = ({children} : { children: React.ReactNode }) => {
    return (
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
    )
}

export default Providers;