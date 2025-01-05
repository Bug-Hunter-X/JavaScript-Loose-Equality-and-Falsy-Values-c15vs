# JavaScript Loose Equality and Falsy Values Bug

This repository demonstrates a common JavaScript bug related to loose equality (`==`) and the handling of falsy values. The `foo` function attempts to handle `null` values correctly, but it fails to account for other falsy values like `0`, `false`, `""`(empty string), `undefined`, and `NaN`, which also cause unexpected results due to type coercion.  The solution provides a corrected version that uses strict equality (`===`) to avoid this issue. 

## Bug
The original code uses loose equality which results in unexpected behavior when non-null falsy values are passed in. 

## Solution
The solution utilizes strict equality (`===`) to explicitly check for null, thus preventing type coercion issues.
