package questions

import "sort"

type AccountsMergeUser struct {
	Name   string
	Emails map[string]string
}

func accountsMerge(accounts [][]string) [][]string {
	users := map[*AccountsMergeUser]struct{}{}
	emailMaps := map[string]*AccountsMergeUser{}
	var merge func(from, to *AccountsMergeUser)

	merge = func(from, to *AccountsMergeUser) {
		if from == to {
			return
		}

		delete(users, from)

		for email := range from.Emails {
			emailMaps[email] = to
			to.Emails[email] = ""
		}
	}

	for _, account := range accounts {
		name := account[0]
		emails := append([]string{}, account[1:]...)

		user := &AccountsMergeUser{
			Name:   name,
			Emails: map[string]string{},
		}

		for _, email := range emails {
			u, ok := emailMaps[email]
			if ok {
				merge(u, user)
			} else {
				emailMaps[email] = user
				user.Emails[email] = ""
			}
		}
		users[user] = struct{}{}
	}

	var result [][]string
	for user := range users {
		v := make([]string, len(user.Emails))

		i := 0
		for e := range user.Emails {
			v[i] = e
			i++
		}
		sort.Strings(v)
		v = append(v[:1], v[0:]...)
		v[0] = user.Name

		result = append(result, v)
	}

	return result
}
