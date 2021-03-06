let emptyImage: HTMLImageElement;
export default function getGhostImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABvCAYAAADixZ5gAAAAAXNSR0IArs4c6QAAAKJlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAARAAAAZodpAAQAAAABAAAAeAAAAAAAAAEsAAAAAQAAASwAAAABQWRvYmUgSW1hZ2VSZWFkeQAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAG+gAwAEAAAAAQAAAG8AAAAAXI+vzAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KUVd6EgAAAZRJREFUeAHt00ENACEQxdBlPXFBMiYhwcVLOgqadv5Ye56vIw38JHXQz0Dx4EcoXvFgAzB6yysebABGb3nFgw3A6C2veLABGL3lFQ82AKO3vOLBBmD0llc82ACM3vKKBxuA0Vte8WADMHrLKx5sAEZvecWDDcDoLa94sAEYveUVDzYAo7e84sEGYPSWVzzYAIze8ooHG4DRW17xYAMwessrHmwARm95xYMNwOgtr3iwARi95RUPNgCjt7ziwQZg9JZXPNgAjN7yigcbgNFbXvFgAzB6yysebABGb3nFgw3A6C2veLABGL3lFQ82AKO3vOLBBmD0llc82ACM3vKKBxuA0Vte8WADMHrLKx5sAEZvecWDDcDoLa94sAEYveUVDzYAo7e84sEGYPSWVzzYAIze8ooHG4DRW17xYAMwessrHmwARm95xYMNwOgtr3iwARi95RUPNgCjt7ziwQZg9JZXPNgAjN7yigcbgNFbXvFgAzB6yysebABGb3nFgw3A6C2veLABGL3lFQ82AKO3vOLBBmD0C32HAvb+3fKLAAAAAElFTkSuQmCC';
    emptyImage.onload = function () {
      emptyImage.width = 400;
      emptyImage.height = 400;
    };
    emptyImage.style.border = 'solid 10px blue';
  }

  return emptyImage;
}
