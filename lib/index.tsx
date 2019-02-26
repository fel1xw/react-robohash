import * as React from 'react'

interface Props {
  name: string,
  alt?: string,
  className?: string,
  size?: string | number,
  set?: number,
  fileType?: string,
  bgset?: number,
  gravatar?: boolean,
  children?: (url: string) => React.ReactElement<any>
}

export const generateURL = ({ name, fileType = 'png', ...rest }: Props) => {
  const url = new URL(`https://robohash.org/${name}.${fileType}`)
  Object.entries(rest).forEach(([ key, value ]) => {
    url.searchParams.set(key, transformValueForKey(key, value))
  })

  return url.href
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
  }
}

const ReactRoboHash = ({ alt, children, className = 'Robohash', ...rest }: Props): React.ReactElement<any> => {
  const url = generateURL(rest)

  return children
    ? children(url)
    : <img src={url} alt={alt || `Robohash-${rest.name}`}  className={className} />
}

export default ReactRoboHash;
