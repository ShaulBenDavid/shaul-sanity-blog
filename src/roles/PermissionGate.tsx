import { useContext } from 'react';
import { Roles } from './roles.types';
import { AuthContext } from '../context/auth';
import { hasMatchingRole } from './roles.utils';

interface PermissionGateProps {
  allowedRoles: Roles[];
  children: JSX.Element | null;
}

const PermissionGate = ({
  allowedRoles,
  children,
}: PermissionGateProps): JSX.Element | null => {
  const { roles } = useContext(AuthContext);

  const isAllowed = hasMatchingRole(allowedRoles, roles);

  if (!isAllowed) {
    return null;
  }

  return children;
};

export default PermissionGate;
