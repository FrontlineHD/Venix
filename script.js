<script>
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const script = "Your script goes here";
            navigator.clipboard.writeText(script).then(() => {
                alert('Script copied to clipboard!');
            });
        });
    });
</script>
