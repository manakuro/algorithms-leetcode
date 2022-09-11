/**
 * accountsMerge
 *
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
  const users = new Set()
  const emailsMap = new Map()

  /**
   * @param {(string|Set)[]} from
   * @param {(string|Set)[]} to
   */
  const merge = (from, to) => {
    if (from === to) return

    users.delete(from)

    for (const email of from[1]) {
      emailsMap.set(email, to)
      to[1].add(email)
    }
  }

  for (const account of accounts) {
    const [name, ...emails] = account
    const user = [name, new Set()]

    users.add(user)
    for (const email of emails) {
      if (emailsMap.has(email)) {
        merge(emailsMap.get(email), user)
      } else {
        emailsMap.set(email, user)
        user[1].add(email)
      }
    }
  }

  const result = []

  for (const user of users) {
    const list = [...user[1]].sort()
    list.unshift(user[0])
    result.push(list)
  }

  return result
}
console.log(
  accountsMerge([
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]),
)
