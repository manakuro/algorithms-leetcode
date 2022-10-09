package questions

func canConstruct(ransomNote string, magazine string) bool {
	ransomNoteMap := make(map[string]int)
	for _, r := range ransomNote {
		_, ok := ransomNoteMap[string(r)]
		if !ok {
			ransomNoteMap[string(r)] = 0
		}
		ransomNoteMap[string(r)] += 1
	}

	magazineMap := make(map[string]int)

	for _, m := range magazine {
		_, ok := magazineMap[string(m)]
		if !ok {
			magazineMap[string(m)] = 0
		}
		magazineMap[string(m)] += 1
	}

	for _, r := range ransomNote {
		_, ok := magazineMap[string(r)]
		if !ok {
			return false
		}

		if magazineMap[string(r)] < ransomNoteMap[string(r)] {
			return false
		}
	}

	return true
}

//result := canConstruct("a", "b")
//
//fmt.Printf("%+v", result)
