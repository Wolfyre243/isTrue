// Super ingenious code no one has ever done ever (literally)

function isTrue(value) {
    if (value === true && value !== false) {
        return true;
    }
    return false;
}

module.exports = isTrue;