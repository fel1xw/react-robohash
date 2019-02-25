import * as React from 'react'

interface Props {
  name: string,
  size?: string | number,
  set?: number,
  fileType?: string,
  bgset?: number,
  gravatar?: boolean,
}

const transformValueForKey = (key: string, value: any) => {
  switch (key) {
    case 'size':
      return typeof value === 'number' ? `${value}x${value}` : value
    case 'set':
      return `set${value}`
    case 'bgset':
      return `bg${value}`
    case 'gravatar':
      return value ? 'yes' : 'no'
    default:
      return value
  }
}

const ReactRoboHash = ({ name, fileType = 'png', ...rest }: Props) => {
  let url = new URL(`https://robohash.org/${name}.${fileType}`)
  Object.entries(rest).forEach(([ key, value ]) => {
    url.searchParams.set(key, transformValueForKey(key, value))
  })

  return (
    <img src={url.href} />
  )
}

export default ReactRoboHash;
