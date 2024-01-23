export const resolve = async (promise) => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        resolved.data = await promise;
    } catch (error) {
        resolved.error = error;
    }

    return resolved;
}