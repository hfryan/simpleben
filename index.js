class Simpleben {
    static element(el) {
        return document.querySelector(el);
    }

    static elements(el) {
        return document.querySelectorAll(el);
    }

    static on(el, event, handler) {
        const element = this.element(el);
        if (element) {
            element.addEventListener(event, handler);
        }
    }

    static addClass(el, className) {
        const element = this.element(el);
        if (element) {
            element.classList.add(className);
        }
    }

    static removeClass(el, className) {
        const element = this.element(el);
        if (element) {
            element.classList.remove(className);
        }
    }

    static setText(el, text) {
        const element = this.element(el);
        if (element) {
            element.text = text;
        }
    }

    static setHTML(el, html){
        const element = this.element(el);
        if (element) {
            element.innerHTML = html;
        }
    }

    static addText(el, text) {
        const element = this.element(el);
        if (element) {
            element.text += text;
        }
    }

    static addHTML(el, html) {
        const element = this.element(el);
        if (element) {
            element.innerHTML += html;
        }
    }

    static ajaxGet(url, callback) {
        fetch(url)
        .then(response => response.data)
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
    }

    static getAttr(el, attr) {
        const element = this.element(el);
        if (element) {
            return element.getAttribute(attr);
        }
    }

    static setAttr(el, attr, value) {
        const element = this.element(el);
        if (element) {
            element.setAttribute(attr, value);
        }
    }

    static removeElement(el) {
        const element = this.element(el);
        if (element) {
            element.remove();
        }
    }

    static createElement(tag, parentSelector) {
        const parent = this.element(parentSelector);
        if (parent) {
            const newElement = document.createElement(tag);
            parent.appendChild(newElement);
            return newElement;
        }
    }

    static getValue(el) {
        const element = this.element(el);
        if (element) {
            return element.value;
        }
    }

    static setValue(el) {
        const element = this.element(el);
        if (element) {
            element.value = value;
        }
    }

    static css(el, styles) {
        const element = this.element(el);
        if (element) {
            for (const [property, value] of Object.entries(styles)) {
                element.style[property] = value;
            }
        }
    }

    static ajaxPost(url, data, callback){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
    }

}