package questions

import "math"

type TimeMapValue struct {
	Value     string
	Timestamp int
}

type TimeMap struct {
	Map map[string][]*TimeMapValue
}

func (t *TimeMap) Set(key string, value string, timestamp int) {
	_, ok := t.Map[key]
	if !ok {
		t.Map[key] = []*TimeMapValue{}
	}
	t.Map[key] = append(t.Map[key], &TimeMapValue{
		Value:     value,
		Timestamp: timestamp,
	})
}

func (t *TimeMap) Get(key string, timestamp int) string {
	_, ok := t.Map[key]
	if !ok {
		return ""
	}
	if len(t.Map[key]) == 0 {
		return ""
	}

	values := t.Map[key]
	result := ""
	start := 0
	end := len(values) - 1

	for start <= end {
		middle := int(math.Floor(float64((start + end) / 2)))

		if values[middle].Timestamp <= timestamp {
			result = values[middle].Value
			start = middle + 1
		} else {
			end = middle - 1
		}
	}

	return result
}
