import * as React from 'react'

type Props = {
  name: string,
  alt?: string,
  className?: string,
  size?: string | number,
  type?: string | number,
  fileType?: string,
  background?: number,
  gravatar?: boolean,
  children?: (url: string) => React.ReactElement<any>
}

export const generateURL = ({ name, fileType = 'png', ...rest }: Props) => {
  const url = new URL(`https://robohash.org/${name}.${fileType}`)
  Object.entries(rest)
    .map(transformKeyAndValue)
    .forEach(([ key, value ]) => {
      url.searchParams.set(key, value)
    })

  return url.href
}

const getSetForType = (type: string) => {
  switch (type.toLowerCase()) {
    case 'robot':
      return 'set1'
    case 'alien':
      return 'set2'
    case 'head':
      return 'set3'
    case 'cat':
      return 'set4'
    default:
      return 'set1'
  }
}
const transformKeyAndValue = ([ key, value ]: any[]) => {
  switch (key) {
    case 'type': {
      const val = typeof value === 'number' ? `set${value}` : getSetForType(value)
      return ['set', val]
    }
    case 'background':
      return ['bgset', `bg${value}`]
    case 'gravatar':
      return value ? ['gravatar', 'yes'] : []
    case 'size':
      const val = typeof value === 'number' ? `${value}x${value}` : value
      return ['size', val]
    default:
      return []
  }
}

const ReactRoboHash = ({ alt, children, className = 'Robohash', ...rest }: Props & React.HTMLAttributes<HTMLDivElement>): React.ReactElement<any> => {
  const url = generateURL(rest)

  return children
    ? children(url)
    : <img src={url} alt={alt || `Robohash-${rest.name}`}  className={className} />
}

export default ReactRoboHash;
