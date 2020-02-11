export default {
    props: ['liveuser'],

    template: `
        <div class="">
        <label for="">Username:</label>
        <input type="text" name="username" id="username" value="">

        <label for="">Password:</label>
        <input type="password" name="password" id="password" value="">

        <button name="submit">Submit</button>
        </div>
    `
}