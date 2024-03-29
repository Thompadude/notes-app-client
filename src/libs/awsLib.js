import {Storage} from "aws-amplify";

export async function s3Upload(file) {

    // TODO: Add UUID to the filename.
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type
    });

    return stored.key;
}
