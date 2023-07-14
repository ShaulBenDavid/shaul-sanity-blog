import { useContext } from 'react';
import { Roles } from './roles.types';
import { AuthContext } from '../context/auth';

interface PermissionGateProps {
  allowedRoles: Roles[];
  children: JSX.Element | null;
}

const PermissionGate = ({
  allowedRoles,
  children,
}: PermissionGateProps): JSX.Element | null => {
  const { roles } = useContext(AuthContext);

  const isAllowed = !!allowedRoles.find((role) => roles.includes(role));

  if (!isAllowed) {
    return null;
  }

  return children;
};

export default PermissionGate;
