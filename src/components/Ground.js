import { usePlane } from "@react-three/cannon";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [0,0,0], position: [0,0,0]
    }))

    return (
        <mesh ref={ref}></mesh>
        </mesh>
    )
}