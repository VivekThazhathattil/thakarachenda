import json
import os

in_file_name = "../entries.json"
out_dir_name = "../entries"
out_entry_file_name = "../lookup.json"
out_entry_arr = []

with open(in_file_name, 'r') as json_file:
    json_data = json.load(json_file)

with open(out_entry_file_name, 'w') as out_json_file:
    for i in range(len(json_data)):
      out_entry_dict = {
        'id': json_data[i]['id'],
        'year': json_data[i]['year'],
        'month': json_data[i]['month'],
        'day': json_data[i]['day'],
        'time': json_data[i]['time'],
        'title': json_data[i]['title']
        }
      out_entry_arr.append(out_entry_dict)

    json.dump(out_entry_arr, out_json_file, ensure_ascii=False, indent=4)

for file_id in range(len(json_data)):
  with open(out_dir_name + "/" + str(json_data[file_id]['id']) + ".json", 'w') as out_json_file:
    out_entry_dict = {
        'id': json_data[file_id]['id'],
        'year': json_data[i]['year'],
        'month': json_data[i]['month'],
        'day': json_data[i]['day'],
        'time': json_data[i]['time'],
        'title': json_data[i]['title'],
        'text': json_data[file_id]['text']
    }
    json.dump(out_entry_dict, out_json_file, ensure_ascii=False, indent=4)