import { Route, Routes } from "react-router-dom"
import { routes } from "../routes"

const useCustomRoutes = (paths) => {
    return (<Routes>{
        routes.map((prop, key = 0) => {
            if (paths.indexOf(prop.path) !== -1)
                return <Route
                    path={prop.path}
                    element={prop.element}
                    key={key++}
                />
        }
        )}
    </Routes>
    )
}

export default useCustomRoutes;