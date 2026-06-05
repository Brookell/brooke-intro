import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Background() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        brightness={1.2}
        cAzimuthAngle={-3}
        cDistance={7.1}
        cPolarAngle={137}
        cameraZoom={9.8}
        color1="#ffd6e0"
        color2="#c8e6f0"
        color3="#f8c8d8"
        destination="onCanvas"
        embedMode="off"
        envPreset="city"
        format="gif"
        fov={20}
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="3d"
        pixelDensity={1}
        positionX={0}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        shader="defaults"
        type="sphere"
        uAmplitude={3}
        uDensity={1.2}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={3}
        uTime={0}
        wireframe={false}
        zoomOut={true}
      />
    </ShaderGradientCanvas>
  )
}
