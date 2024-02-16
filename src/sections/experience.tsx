import { memo, PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { Row } from '../elements/row.tsx';
import { Bullet } from '../elements/bullet.tsx';
import { COLOR } from '../constants.ts';
import { getDateRange } from '../utils/date/date.utils.ts';

interface ExperienceProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  startDate?: string;
  endDate?: string;
  isLast?: boolean;
  hasDivider?: boolean;
}

const styles = StyleSheet.create({
  experience: {
    width: '100%',
    display: 'flex',
    marginBottom: 8,
  },
  lastExperience: {
    marginBottom: 0,
  },
  title: {
    fontStyle: 'bold',
  },
  subtitle: {
    marginBottom: 5,
  },
  content: {
    display: 'flex',
    gap: 5,
  },
  divider: {
    marginTop: 8,
    width: '100%',
    height: 0.6,
    backgroundColor: COLOR.PRIMARY,
    opacity: 0.15,
  }
});

export const Experience = memo<ExperienceProps>(({
  title,
  subtitle,
  startDate,
  endDate,
  children,
  isLast = false,
  hasDivider = false,
}) => (
  <View style={[styles.experience, isLast ? styles.lastExperience : {}]}>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Row justifyContent="space-between">
      <View style={styles.subtitle}>
        <Text>{subtitle}</Text>
      </View>
      {startDate && (
        <Row>
          <Text>{startDate} - {endDate || 'present'}</Text>
          <Bullet/>
          <Text>{getDateRange(startDate, endDate)}</Text>
        </Row>
      )}
    </Row>}

    <View style={styles.content} wrap>
      {children}
    </View>

    {!isLast && hasDivider && <View style={styles.divider}/>}
  </View>
));