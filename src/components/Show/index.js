import PropTypes from 'prop-types';

/**
 * Used to show/hide other components.
 * - Visibility is controlled via CSS, allowing the component to stay mounted (cached).
 * - Alternatively, components can be unmounted if caching is not needed.
 */
const Show = ({
  visible,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {children}
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Show;