import os
import shutil

root = "/Users/milann/Desktop/code/github/EDUQTOI/Commerce, Vente, Accueil"
target_clean = "Annee"

print(f"Listing root: {root}")
try:
    items = os.listdir(root)
    print(f"Items found: {items}")

    for item in items:
        # Match "Anne" to catch the accented/decomposed version
        if "Anne" in item and item != target_clean:
            full_path = os.path.join(root, item)
            new_path = os.path.join(root, target_clean)
            
            print(f"Renaming '{item}' to '{target_clean}'")
            try:
                os.rename(full_path, new_path)
                print("Directory rename successful.")
            except Exception as e:
                print(f"Error renaming directory: {e}")
                continue
            
            # Now search inside the new directory for "première"
            if os.path.exists(new_path):
                 print(f"Scanning {new_path} for files...")
                 for sub_item in os.listdir(new_path):
                    # Match "premie" to catch the accented/decomposed version "première"
                    if "premie" in sub_item and sub_item.endswith(".html"):
                        sub_full = os.path.join(new_path, sub_item)
                        sub_new = os.path.join(new_path, "premiere.html")
                        print(f"Renaming inner file '{sub_item}' to 'premiere.html'")
                        try:
                            os.rename(sub_full, sub_new)
                            print("File rename successful.")
                        except Exception as e:
                             print(f"Error renaming file: {e}")
                        break
            break
except Exception as e:
    print(f"Critical error: {e}")
