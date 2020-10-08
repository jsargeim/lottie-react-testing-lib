import Lottie from 'lottie-web'
import * as React from 'react'
import * as loader from './loader.json'

export const LottieComponent = props => {
  const [currAnimation, setCurrAnimation] = React.useState()
  const id = 'lottie-element'
  const animate = () => {
    if (currAnimation) currAnimation.destroy()
    const animation = loader.default
    const elem = document.getElementById(id)

    setTimeout(() => {
      if (elem) {
        const anim = Lottie.loadAnimation({
          container: elem,
          height: 600,
          width: 600,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            viewBoxSize: '0 0 600 600',
          },
        })
        setCurrAnimation(anim)
      }
    }, 1000)
  }

  React.useEffect(() => {
    animate()
  }, [])

  return <div style={{height: 360, width: 360}} id={id} />
}
