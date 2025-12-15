import os
import shutil

root = "/Users/milann/Desktop/code/github/EDUQTOI"
target_clean = "Systemes numeriques"

# Walk directory to find the bad folder
print(f"Listing root: {root}")
items = os.listdir(root)
print(f"Items found: {items}")

for item in items:
    # Match "Syste" and "riques" to catch the accented/decomposed version
    if "Syste" in item and "riques" in item:
        full_path = os.path.join(root, item)
        new_path = os.path.join(root, target_clean)
        
        print(f"Renaming '{item}' to '{target_clean}'")
        try:
            os.rename(full_path, new_path)
            print("Directory rename successful.")
        except Exception as e:
            print(f"Error renaming directory: {e}")
            continue
        
        # Now rename the internal HTML file
        # Check if new path exists now
        if os.path.exists(new_path):
             for sub_item in os.listdir(new_path):
                if sub_item.startswith("Syste") and sub_item.endswith(".html"):
                    sub_full = os.path.join(new_path, sub_item)
                    sub_new = os.path.join(new_path, "Systemes numeriques.html")
                    print(f"Renaming inner file '{sub_item}' to 'Systemes numeriques.html'")
                    try:
                        os.rename(sub_full, sub_new)
                        print("File rename successful.")
                    except Exception as e:
                         print(f"Error renaming file: {e}")
                    break
        break
