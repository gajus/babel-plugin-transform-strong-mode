export default ({
  types: t
}) => {
    return {
        visitor: {
            Program (path, state) {
                let {node} = path;

                if (state.opts.strong === false) {
                    return;
                }

                for (let directive of (node.directives)) {
                    if (directive.value.value === 'use strong') {
                        return;
                    }
                }

                path.unshiftContainer('directives', t.directive(t.directiveLiteral('use strong')));
            }
        }
    };
}
