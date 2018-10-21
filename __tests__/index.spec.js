import { join, isAbsolute, parse } from '../src'

test('join', () => {
  expect(join('path', 'sub', 'module')).toBe('path/sub/module')
  expect(join('path', '/sub', 'module')).toBe('path/sub/module')

  expect(join('/path/name', '//sub', 'module/')).toBe('/path/name/sub/module/')
  expect(join('path', '', 'name')).toBe('path/name')
  expect(join('path', ' ', 'name')).toBe('path/ /name')

  expect(() => join('path', {}, 'name')).toThrow()
  expect(() => join('path', undefined, 'name')).toThrow()
  expect(() => join('path', true, 'name')).toThrow()
})

test('isAbsolute', () => {
  expect(isAbsolute('http://path/name')).toBe(true)
  expect(isAbsolute('ftp://path/name')).toBe(true)
  expect(isAbsolute('//path/name')).toBe(true)
  expect(isAbsolute('/path/name')).toBe(false)
})

test('parse', () => {
  const url1 = 'https://www.facebook.com/path/name?foo=1&bar=2#id'
  expect(parse(url1)).toEqual({
    href: url1,
    protocol: 'https:',
    host: 'www.facebook.com',
    hostname: 'www.facebook.com',
    port: '',
    search: '?foo=1&bar=2',
    hash: '#id',
    pathname: '/path/name'
  })

  const url2 = 'https://www.facebook.com:80'
  expect(parse(url2)).toEqual({
    href: url2 + '/',
    protocol: 'https:',
    host: 'www.facebook.com:80',
    hostname: 'www.facebook.com',
    port: '80',
    search: '',
    hash: '',
    pathname: '/'
  })
})
